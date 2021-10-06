import React from "react";
import AdvForm from "../Components/admin/AdvForm";
import Section from "../Components/section/Section";
const AdminPage = ({ addNewAdv }) => {
  return (
    <Section title="Добавление нового объявления">
      <AdvForm addNewAdv={addNewAdv} />
    </Section>
  );
};

export default AdminPage;
