import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helphttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

function CrudApi() {
  const [db, setDB] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = "http://localhost:8080/personajes";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      api
        .get(url)
        .then((res) => {
          setDB(res);
          setError(null);
        })
        .catch((err) => {
          setDB(null);
          setError(err);
        });
      setLoading(false);
    }, 1000);
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDB([...db, data]);
        }
      })
      .catch((err) => setError(err));
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;

    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          const newDate = db.map((el) => (el.id === data.id ? data : el));
          setDB(newDate);
        }
      })
      .catch((err) => setError(err));
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(`Estas seguro de eliminar el registro con el id ${id}`);

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { "content-type": "application/json" },
      };
      api
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            const newDate = db.filter((el) => el.id !== id);
            setDB(newDate);
          }
        })
        .catch((err) => setError(err));
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD API con Json Server</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <Message msg={`Error: ${error.status} | ${error.statusText}`} />}
      {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
    </>
  );
}

export default CrudApi;
