import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import * as api from "../services/api";
import useAuth from "../hooks/useAuth";

export default function AddTest() {
  const [formData, setFormData] = useState<any>({
    title: "",
    pdfUrl: "",
    category: "",
    discipline: "",
    teacher: "",
  });
  const [options, setOptions] = useState<any>({
    category: [],
    discipline: [],
    teacher: [],
    tecahersDisciplines: [],
  });
  const { auth } = useAuth();

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const test = {
      title: formData.title,
      pdfUrl: formData.pdfUrl,
      categoryId: options.category.find(
        (category: any) => category.name === formData.category
      ).id,
      disciplineId: options.discipline.find(
        (discipline: any) => discipline.name === formData.discipline
      ).id,
      teacherId: options.teacher.find(
        (teacher: any) => teacher.name === formData.teacher
      ).id,
    };

    await api.insertTest(auth, test);
  }
  function handleChange(event: any) {
    const {
      target: { name, value },
    } = event;
    setFormData({ ...formData, [name]: value });
    options.teachersDisciplines &&
      console.log(options.teachersDisciplines[0].discipline.name);
    formData.discipline && console.log(formData.discipline);

    const oi =
      options.teachersDisciplines &&
      options.teachersDisciplines
        .filter((option: any) => {
          return option.discipline.name === formData.discipline;
        })
        .map((el: any) => el.teacher.name);
    console.log(oi);
  }
  function handleAutocompleteChange(name: string, value: any) {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }
  async function getData() {
    const category = await api.getCategories(auth);
    const discipline = await api.getDisciplines(auth);
    const teacher = await api.getTeachers(auth);
    const teachersDisciplines = await api.getTeachersDisicplines(auth);

    setOptions({
      category: category,
      discipline: discipline,
      teacher: teacher,
      teachersDisciplines: teachersDisciplines,
    });
  }

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "80vw",
        }}
      >
        <TextField
          fullWidth={true}
          variant="filled"
          type="string"
          required
          id="title"
          label="Título da prova"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth={true}
          variant="filled"
          required
          type="url"
          id="pdf"
          label="PDF da Prova"
          name="pdfUrl"
          value={formData.pdfUrl}
          onChange={(e) => handleChange(e)}
        />
        <Autocomplete
          fullWidth={true}
          id="category-input"
          options={options.category.map((option: any) => option.name)}
          autoComplete={true}
          onInputChange={(e, value) =>
            handleAutocompleteChange("category", value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categoria"
              variant="filled"
              required
              size="small"
            />
          )}
        />
        <Autocomplete
          fullWidth={true}
          id="category-input"
          options={options.discipline.map((option: any) => option.name)}
          autoComplete={true}
          onInputChange={(e, value) =>
            handleAutocompleteChange("discipline", value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Disciplina"
              variant="filled"
              required
              size="small"
            />
          )}
        />
        <Autocomplete
          fullWidth={true}
          id="category-input"
          options={
            formData.discipline && options.teachersDisciplines
              ? options.teachersDisciplines
                  .filter((option: any) => {
                    return option.discipline.name === formData.discipline;
                  })
                  .map((el: any) => el.teacher.name)
              : ["Escolha uma disciplina"]
          }
          autoComplete={true}
          onInputChange={(e, value) =>
            handleAutocompleteChange("teacher", value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Teacher"
              variant="filled"
              required
              size="small"
            />
          )}
        />
        <Button sx={{ mb: 5 }} type="submit" fullWidth variant="contained">
          <Typography component="h1" variant="button">
            Adicionar
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
