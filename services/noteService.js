import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  async getNotes() {
    const response = await databaseService.listDocuments(dbId, colId);
    if (response.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  async addNote(text) {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const data = {
      text: text.trim(),
      createdAt: new Date().toISOString(),
    };

    const response = await databaseService.createDocument(
      dbId,
      colId,
      data,
      ID.unique()
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  async deleteNote(noteId) {
    const response = await databaseService.deleteDocument(dbId, colId, noteId);
    if (response?.error) {
      return { error: response.error };
    }

    return { success: true };
  },
};

export default noteService;
