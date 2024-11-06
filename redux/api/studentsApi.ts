import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { studentType } from "../../utils/studentType";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api/" }),
  endpoints: (builder) => ({
    getAllStudents: builder.query<studentType[], void>({
      query: () => "/characters",
    }),
    getStudentById: builder.query<[studentType], string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery } = studentsApi;
