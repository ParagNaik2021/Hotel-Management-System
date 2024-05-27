import axios from "axios";
export const api = axios.create({ baseURL: "http://localhost:8080" });

/*this function add new room to the database */
export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData, {
    // headers: getHeader(),
  });
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

/* this function all roomtypes from database*/
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching room types");
  }
}

/* This function get all room from database*/
export async function getAllRooms() {
  try {
    const result = await api.get("/rooms/all-rooms");
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw new Error("Error Fetching rooms");
  }
}

/* this function deleted a room by id*/
export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/delete/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error deleting room & ${error.message}`);
  }
}
