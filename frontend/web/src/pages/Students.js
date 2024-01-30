import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import StudentProfileModal from "../components/students/StudentsProfileModal";
import RegisterStudentModal from "../components/students/RegisterStudentModal";
import StudentTable from "../components/students/StudentTable";
import TableFiltering from "../components/students/TableFiltering";
import RegisterButton from "../components/students/RegisterButton";

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 2,
    name: "Mary Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 6,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 8,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 10,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 11,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },
  {
    id: 12,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: 123456789,
    age: 19,
    tennisLevel: "Intermediate",
    joinedOn: "20/12/2014",
  },

  // Add more students as needed
];

const getStyles = () => ({
  container: {
    width: "95%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },
});
function Students() {
  const [windowWidth, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("name");

  const columns = [
    "Name",
    "Email",
    "Phone Number",
    "Age",
    "Tennis Level",
    "Joined On",
  ];

  const filteredStudents = studentsData
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (typeof a[orderBy] === "number" && typeof b[orderBy] === "number") {
        return a[orderBy] - b[orderBy];
      } else {
        return a[orderBy].localeCompare(b[orderBy]);
      }
    });

  const [selectedStudent, setSelectedStudent] = useState({
    id: -1,
    name: "",
    email: "",
    phoneNumber: -1,
    age: -1,
    tennisLevel: "",
    joinedOn: "",
  });
  const [isStudentProfileModalOpen, setIsStudentProfileModalOpen] =
    useState(false);

  const handleOpenStudentProfileModal = (student) => {
    setSelectedStudent(student);
    setIsStudentProfileModalOpen(true);
  };

  const handleCloseStudentProfileModal = () => {
    setIsStudentProfileModalOpen(false);
  };

  const [isRegisterStudentModalOpen, setIsRegisterStudentModalOpen] =
    useState(false);

  const handleOpenRegisterStudentModal = () => {
    setIsRegisterStudentModalOpen(true);
  };

  const handleCloseRegisterStudentModal = () => {
    setIsRegisterStudentModalOpen(false);
    resetRegisterStudentModal();
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [level, setLevel] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    dayOfBirth: "",
    phoneNumber: "",
    address: "",
    tennisLevel: "",
    profilePicture: null,
    weeklyPracticeHours: 0,
    coachingResources: null,
    schoolMobileApp: null,
    federateTournaments: null,
    availability: null,
  });

  const resetRegisterStudentModal = () => {
    setActiveStep(0);
    setLevel("");
    setSelectedSlots([]);
    setFormState({
      fullName: "",
      email: "",
      dayOfBirth: "",
      phoneNumber: "",
      address: "",
      tennisLevel: "",
      profilePicture: null,
      weeklyPracticeHours: 0,
      coachingResources: null,
      schoolMobileApp: null,
      federateTournaments: null,
      availability: null,
    });
  };

  const styles = getStyles();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.firstRow}>
        <TableFiltering
          windowWidth={windowWidth}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          columns={columns}
        />
        <RegisterButton
          handleOpenRegisterStudentModal={handleOpenRegisterStudentModal}
          windowWidth={windowWidth}
        />
      </Box>
      <StudentTable
        filteredStudents={filteredStudents}
        handleOpenStudentProfileModal={handleOpenStudentProfileModal}
        columns={columns}
      />
      <StudentProfileModal
        isModalOpen={isStudentProfileModalOpen}
        handleCloseModal={handleCloseStudentProfileModal}
        selectedStudent={selectedStudent}
        handleOpenEditStudentModal={handleOpenRegisterStudentModal}
        windowWidth={windowWidth}
      />
      <RegisterStudentModal
        isModalOpen={isRegisterStudentModalOpen}
        handleCloseModal={handleCloseRegisterStudentModal}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        level={level}
        setLevel={setLevel}
        selectedSlots={selectedSlots}
        setSelectedSlots={setSelectedSlots}
        formState={formState}
        setFormState={setFormState}
        windowWidth={windowWidth}
      />
    </Box>
  );
}

export default Students;
