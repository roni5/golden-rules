import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./RuleForm.css";
import { useNavigate } from "react-router-dom";

const RuleForm = ({ rules, setRules }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(rules[id]);

  const [fields, setFields] = useState({
    title: id ? rules[id].title : "",
    description: id ? rules[id].description : "",
    titleValid: id ? true : false,
    descValid: true
  });

  function changeField(event) {
    let tempFieldName = event.target.name;
    let tempFields = { ...fields };
    tempFields[tempFieldName] = event.target.value;

    if (tempFieldName === "title") {
      let validField = validateTitle(tempFields.title);
      validField
        ? (tempFields.titleValid = true)
        : (tempFields.titleValid = false);

      setFields(tempFields);
    } else if (tempFieldName === "description") {
      let validField = validateDesc(tempFields.description);
      validField
        ? (tempFields.descValid = true)
        : (tempFields.descValid = false);

      setFields(tempFields);
    }
  }

  function validateTitle(str) {
    if (str.length <= 100 && str.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  function validateDesc(str) {
    if ((str.length <= 100 && str.length >= 5) || str.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function submitForm(event, idToEdit) {
    event.preventDefault();
    if (idToEdit) {
      if (confirm("Vous allez modifier une règle") === true) {
        let tempRules = [...rules];
        tempRules[id].title = fields.title;
        tempRules[id].description = fields.description;
        setRules(tempRules);
        console.log(tempRules);
        navigate("/");
      } else {
        console.log("annulé");
      }
    } else {
      if (confirm("Vous allez créer une nouvelle règle") === true) {
        let tempRules = [
          ...rules,
          {
            id: rules[rules.length - 1].id + 1,
            title: fields.title,
            description: fields.description,
            likes: 0,
            dislikes: 0,
            tags: []
          }
        ];
        setRules(tempRules);
        console.log(tempRules);
        navigate("/");
      } else {
        console.log("annulé");
      }
    }
  }

  return (
    <form onSubmit={(event) => submitForm(event, id)}>
      <label>Title:</label>
      {!fields.titleValid && (
        <p className="notValid">Title must be not empty and max 50 char</p>
      )}
      <input
        type="text"
        name="title"
        value={fields.title}
        onChange={(event) => changeField(event)}
      />

      <label>Description:</label>
      {!fields.descValid && (
        <p className="notValid">/!\ minimum: 5 char | maximun: 100 char</p>
      )}
      <input
        type="text"
        name="description"
        value={fields.description}
        onChange={(event) => changeField(event)}
      />

      <input
        type="submit"
        value="Submit"
        disabled={!(fields.titleValid && fields.descValid)}
      />
    </form>
  );
};

export default RuleForm;
