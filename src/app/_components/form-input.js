export const FormInput = (props) => {

    const { error, value, handleChange, inputTag, name, placeholder, type } = props;

    return (
        <div>
            <p> {inputTag} <span style={{ color: "red" }}>*</span> </p>
            <input
                onChange={handleChange}
                value={value}
                name={name}
                className={error ? "input-error" : "input-style"}
                placeholder={placeholder}
                type={type} />
            {error && <p className="error-text"> {error} </p>}
        </div>
    )
}