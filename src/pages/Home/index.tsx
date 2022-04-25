import React, { useEffect, useState } from "react";
import { Input, InputField } from "../../components/Form";
import { UpperContainer, HorizontalDivisor } from "./style";
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

  async function getData() {
    const testsDisciplines = await api.getTestsByDisciplines(auth);
    const testsTeachers = await api.getTestsByTeacher(auth);
    setTestsDisciplines(testsDisciplines.data);
    setTestsTeachers(testsTeachers.data);
  }
  return (
    <UpperContainer>
      <HeaderLogout />
      <InputField search="search">
        <Input
          type="text"
          placeholder={
            selectTeachers === selectDisciplines
              ? "Pesquisar"
              : selectTeachers
              ? "Pesquise por professor"
              : "Pesquise por disciplina"
          }
        />
        <Icon
          icon={androidSearch}
          size={28}
          style={{ color: "#25252781" }}
          className="icon"
        />
      </InputField>
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
        testsDisciplines.map((test: any) => {
          return <SearchByDiscipline data={test} key={test.id} />;
        })}
      {selectTeachers &&
        testsTeachers &&
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
    </UpperContainer>
  );
}
