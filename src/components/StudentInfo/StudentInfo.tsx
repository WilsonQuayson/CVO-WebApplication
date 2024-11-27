import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResetPasswordModal from "../ResetPasswordModal/ResetPasswordModal";
import { User } from "../../interfaces";

const StudentInfo = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<User>();
    const [activeBtn, setActiveBtn] = useState("personalia");
    const [modal, setModal] = useState(false);

    /*
    const resetPassword = async () => {
        try {
          const response = await fetch(`/api/students/${studentId}/reset-password`, {
            method: "POST",
          });
    
          if (response.ok) {
            alert("Password reset successfully. The student has been emailed.");
          } else {
            alert("Failed to reset password. Please try again.");
          }
        } catch (error) {
          console.error("Error resetting password:", error);
          alert("An error occurred. Please try again.");
        }
    };


    const handleResetPassword = async () => {
        setModalOpen(false);
        await resetPassword();
    };
    */

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch(`https://dummyjson.com/users/${id}`);
            let data : User = await result.json(); 
            console.log(data)
            setStudent(data);
        }
        fetchFunction();
    },[id]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return(
        <section className="h-full shadow-lg flex flex-col bg-neutral-100 rounded-2xl p-5">
            <section className="bg-neutral-100 flex w-full h-40 p-4 rounded-xl">
                <img src={student.image} alt="" className="h-32 rounded-full overflow-hidden"/>
                <div className="font-medium uppercase text-slate-600 ml-6">
                    <p>cursist</p>
                    <p className="mt-5 text-4xl">{student?.firstName} {student?.lastName}</p>
                </div>
            </section>
            <section className="w-full rounded-xl mt-8">
                <div>
                    <button onClick={() => setActiveBtn("personalia")} className={`p-2 ${activeBtn === "personalia" ? "bg-slate-600 text-white" : ""}`}>Personalia</button>
                    <button onClick={() => setActiveBtn("extra")} className={`p-2 ${activeBtn === "extra" ? "bg-slate-600 text-white" : ""}`}>Extra</button>
                </div>
                { activeBtn === "personalia" &&
                    <div className="w-full border-slate-600 border-t-2 p-2 shadow-md">
                        <form action="" method="get">
                            <div className="flex gap-2">
                                <label htmlFor="name">Familienaam:</label>
                                <p className="font-medium">{student.lastName}</p>
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="name">Voornaam:</label>
                                <p className="font-medium">{student.firstName}</p>
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="name">Adres:</label>
                                <p className="font-medium">{student.address.address}</p>
                            </div>
                        </form>
                    </div>
                }
                { activeBtn === "extra" &&
                    <div className="w-full border-slate-600 border-t-2 p-2 shadow-md">
                        <button onClick={() => setModal(true)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Reset Wachtwoord</button>
                        <ResetPasswordModal isOpen={modal} onClose={() => setModal(false)}/>
                    </div>
                }
            </section>
        </section>
    )
}

export default StudentInfo;