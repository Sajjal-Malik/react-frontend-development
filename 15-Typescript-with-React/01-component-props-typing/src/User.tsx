// type UserType = {
//     userName: string;
//     age: number;
//     isStudent: boolean
// };

interface UserType {
    userName: string;
    age: number;
    isStudent: boolean
};

const User = ({ userName, age, isStudent }: UserType) => {
    return (
        <div>
            <h1>Name: {userName}</h1>
            <h2>Age: {age}</h2>
            <h2>Are you student: {isStudent ? "Yes" : "No"}</h2>
        </div>
    )
}

export default User
