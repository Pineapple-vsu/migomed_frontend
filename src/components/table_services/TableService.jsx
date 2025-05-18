import styles from "./table-service.module.css";
// import React from "react";
// import { useEffect, useState } from "react";

export const TableService = ({ services }) => {
  return (
    <div className={styles.table_block}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <h4>Название</h4>
            </th>
            <th>
              <h4>Цена</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name || service.title}</td>
              <td>{service.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
