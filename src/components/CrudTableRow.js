
import React from "react";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  const { name, poder, id } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{poder}</td>
        <td>
          <button onClick={e => setDataToEdit(el)}>Editar</button>
          <button onClick={e => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  )
}
