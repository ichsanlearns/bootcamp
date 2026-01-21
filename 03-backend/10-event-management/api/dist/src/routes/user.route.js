import express from "express";
import { getAllUsers, getUserById, hardDeleteAllUser, hardDeleteUserById, softDeleteAllUser, softDeleteUserById, updateUser, } from "../controller/user.controller.js";
const router = express.Router();
router.route("/").get(getAllUsers);
router.route("/delete").put(softDeleteAllUser).delete(hardDeleteAllUser);
router.route("/:id").get(getUserById).put(updateUser);
router.route("/delete/:id").put(softDeleteUserById).delete(hardDeleteUserById);
export default router;
//# sourceMappingURL=user.route.js.map