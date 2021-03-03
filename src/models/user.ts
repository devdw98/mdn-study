import { ObjectId } from "mongodb";
import { verify } from "argon2";

const allPermissions = ["admin", "readonly"] as const;

type PermissionType = typeof allPermissions extends readonly (infer T)[]
  ? T
  : never;

interface User {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  permissions: PermissionType[];
  createdAt: Date;
  updatedAt: Date;
}

export async function checkPassword(
  user: User,
  password: string
): Promise<boolean> {
  return verify(user.password, password);
}
