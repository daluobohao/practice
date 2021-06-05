import React from "react";
import { useState } from "react";
import styles from "./index.less";

const TagInput = (props: any) => {
  const { tags = [] } = props;
  const [tagData, setTagData] = useState(tags);
  const removeTagData = (indexToRemove: number) => {
    setTagData([
      ...tagData.filter((_: string, index: number) => index !== indexToRemove),
    ]);
  };
  const addTagData = (event: any) => {
    console.log("addTagData:event", event.target.value);

    if (event.target.value !== "") {
      setTagData([...tagData, event.target.value]);
      event.target.value = "";
    }
  };
  console.log("tagData:", tagData);
  return (
    <div className={styles.inputContainer}>
      <ul className={styles.tags}>
        {tagData.map((tag: string, index: number) => (
          <li key={index} className={styles.tag}>
            <span className={styles["tag-title"]}>{tag}</span>
            <span
              className={styles["tag-close-icon"]}
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
        placeholder="please enter to add a tag"
      />
    </div>
  );
};
export default TagInput;
