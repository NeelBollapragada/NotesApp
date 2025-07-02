import { ID, Query } from "react-native-appwrite";
import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  async getNotes(userId) {
    if (!userId) {
      console.error("Error: Missing userId in getNotes()");
      return {
        data: [],
        error: "User ID is missing",
      };
    }

    try {
      const response = await databaseService.listDocuments(dbId, colId, [
        Query.equal("user_id", userId),
      ]);
      return response;
    } catch (error) {
      console.log("Error fetching notes:", error.message);
      return { data: [], error: error.message };
    }
  },

  async addNote(text, userId) {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const data = {
      text: text.trim(),
      createdAt: new Date().toISOString(),
      user_id: userId,
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

  async updateNote(noteId, text) {
    const response = await databaseService.updateDocument(dbId, colId, noteId, {
      text,
    });

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },
};

export default noteService;
