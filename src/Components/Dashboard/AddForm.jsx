import React from "react";
import styles from "./Dashboard.module.css"

const AddForm = ({column, addColumn, addCard, columnIndex}) => {
    const [form, setForm] = React.useState(false);
    const [textForm, setTextFrom] = React.useState("");
    const openForm = () => {
        setForm(true)
    };
    const closeForm = () => {
        setForm(false);
        setTextFrom("")
    };
    const onChangeForm = (e) => {
        setTextFrom(e.target.value)
    };
    const pushButton=()=>{
        column
            ? addColumn(textForm)
            : addCard(columnIndex, textForm); setForm(false); setTextFrom("")
    };
    return (
        <div className={styles.buttonContainer}>
            <div>
                {form
                    ? <div>
                    <textarea
                        placeholder={column
                            ? "Enter text of a new column"
                            : "Enter text of a new card"}
                        autoFocus={true}
                        onBlur={closeForm}
                        value={textForm}
                        onChange={onChangeForm}
                        onKeyPress={e=>{if(e.key==="Enter"){pushButton()}}}
                        className={styles.form} name="textarea" id="textarea" cols="3"/>
                    </div>
                    : <div onClick={openForm} className={styles.addColumnCardText}>
                        + {column ? "Add column" : "Add card"}
                    </div>
                }
            </div>
            <div>
                {form
                    ? <div className={styles.buttonRow}>
                        <button onMouseDown={textForm? pushButton : null}
                                variant="contained" className={styles.addColumnCardBtn}>
                            {column ? "Add column" : "Add card"}
                        </button>
                    </div>
                    : null}

            </div>
        </div>
    )
};
export default AddForm;