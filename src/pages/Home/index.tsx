import React, { useEffect, useState } from "react";
import { Input, InputField } from "../../components/Form";
import { UpperContainer, HorizontalDivisor, Title } from "./style";
import HeaderLogout from "../../components/HeaderLogout";
import Icon from "react-icons-kit";
import { androidSearch } from "react-icons-kit/ionicons/androidSearch";
import { telescope } from "react-icons-kit/oct/telescope";
import SearchByDiscipline from "../../components/SearchByDiscipline";
import NavBar from "../../components/NavBar";
import SearchByTeacher from "../../components/SearchByTeacher";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { convertCompilerOptionsFromJson } from "typescript";
import AddTest from "../../components/AddTest";

export default function Home() {
  const [selectDisciplines, setSelectDisciplines] = useState(true);
  const [selectTeachers, setSelectTeachers] = useState(false);
  const [selectAdd, setSelectAdd] = useState(false);
  const [testsDisciplines, setTestsDisciplines] = useState<any>();
  const [testsTeachers, setTestsTeachers] = useState<any>();
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    if (!auth) {
      navigate("/");
    }
  }, []);

  function handleChange({ target }: { target: any }) {
    const disciplines =
      testsDisciplines &&
      testsDisciplines.filter((test: any) =>
        test.disciplines[0].name
          .toLowerCase()
          .includes(target.value.toLowerCase())
      );
    const teachers =
      testsTeachers &&
      testsTeachers.filter((test: any) =>
        test.name.toLowerCase().includes(target.value.toLowerCase())
      );

    setTestsDisciplines(disciplines);
    setTestsTeachers(teachers);
    if (target.value.length === 0) {
      getData();
    }
  }

  async function getData() {
    const testsDisciplines = await api.getTestsByDisciplines(auth);
    const testsTeachers = await api.getTestsByTeacher(auth);
    setTestsDisciplines(testsDisciplines.data);
    setTestsTeachers(testsTeachers.data);
  }
  return (
    <UpperContainer>
      <HeaderLogout />
      <InputField search="search" show={selectTeachers === selectDisciplines}>
        <Input
          type="text"
          placeholder={
            selectTeachers === selectDisciplines
              ? "Pesquisar"
              : selectTeachers
              ? "Pesquise por professor"
              : "Pesquise por disciplina"
          }
          onChange={(e) => handleChange(e)}
        />

        <Icon
          icon={androidSearch}
          size={28}
          style={{ color: "#25252781" }}
          className="icon"
        />
      </InputField>
      <Title show={selectTeachers === selectDisciplines}>Adicionar</Title>
      <HorizontalDivisor />
      <NavBar
        selectDisciplines={selectDisciplines}
        setSelectDisciplines={setSelectDisciplines}
        selectTeachers={selectTeachers}
        setSelectTeachers={setSelectTeachers}
        selectAdd={selectAdd}
        setSelectAdd={setSelectAdd}
      />
      {selectDisciplines &&
        testsDisciplines &&
        testsDisciplines[0] &&
        testsDisciplines.map((test: any) => {
          return <SearchByDiscipline data={test} key={test.id} />;
        })}
      {selectTeachers &&
        testsTeachers &&
        testsTeachers[0] &&
        testsTeachers.map((test: any) => {
          return <SearchByTeacher data={test} key={test.id} />;
        })}
      {!selectDisciplines && !selectTeachers && !selectAdd && (
        <>
          <p style={{ color: "#25252781" }}>Nada encontrado</p>{" "}
          <Icon
            icon={telescope}
            size={28}
            style={{ color: "#25252781" }}
            className="icon"
          />
        </>
      )}
      {selectAdd && <AddTest setSelectAdd={setSelectAdd}/>}
    </UpperContainer>
  );
}
