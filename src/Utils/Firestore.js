import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../Config/Firebase-Config";
/**
 * @param {Object} task 
 * @returns {Promise<void>}
 */
export async function saveTask(task) {
    try {
        const taskRef = collection(db, "tasks");
        await addDoc(taskRef, {
            ...task,
            createdAt: Timestamp.now(),
        });
        console.log("Task saved successfully!");
    } catch (error) {
        console.error("Error saving task: ", error);
    }
}