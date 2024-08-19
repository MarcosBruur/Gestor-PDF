import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFile } from "../../api/files.api"

export const AgregarArchivo = createAsyncThunk(
    'gestor/AgregarArchivo',
    async (file, thunkAPI) => {
        const resp = await addFile(file);
        console.log("archivo añadido,---------------")
    }

)