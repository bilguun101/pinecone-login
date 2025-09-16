export const FormInput = (props) => {

    const { error, value, handleChange, inputTag, name } = props;

    return (
        <div>
            <p> {inputTag} <span style={{ color: "red" }}>*</span> </p>
            <input
                onChange={handleChange}
                value={value}
                name={name}
                className={error ? "input-error" : "input-style"}
                placeholder="Enter first name..." />
            {error && <p className="error-text"> {error} </p>}
        </div>
    )
}