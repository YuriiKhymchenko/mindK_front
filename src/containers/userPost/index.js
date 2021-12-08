import { UserPost } from "../../components/userPost";

export function UserPostContainer({
  firstName,
  lastName,
  middleName,
  birthdayYear,
  postText,
}) {
  const fullName = `${firstName} ${middleName} ${lastName}`;
  const age = 2021 - birthdayYear;

  return <UserPost fullName={fullName} age={age} postText={postText} />;
}
