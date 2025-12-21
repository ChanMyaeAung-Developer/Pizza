import { useState } from "react";
import { TbEye, TbEyeOff } from "react-icons/tb";

function HookFormInput({
	isRequired = false,
	type = "",
	placeholder = "",
	disabled = false,
	label = "",
	register,
	errors,
}) {
	const [viewCredential, setViewCredential] = useState(false);
	return (
		<div className="relative w-full">
			<label className={`input-label ${errors && "input-label-error"}`}>
				{label} {isRequired && <span className="text-error">*</span>}
			</label>
			{type === "textarea" ? (
				<textarea
					{...register}
					disabled={disabled}
					className={`textarea-box ${errors ? "border-error" : disabled ? "bg-disabled cursor-not-allowed" : ""}`}
					placeholder={placeholder}
				/>
			) : (
				<input
					{...register}
					placeholder={placeholder}
					disabled={disabled}
					className={`input-box ${errors ? "border-error" : disabled ? "bg-disabled cursor-not-allowed" : ""}`}
					type={viewCredential ? "text" : type}
				/>
			)}

			{errors && <p className="mt-2 text-error">{errors?.message}</p>}
			{type === "password" && (
				<span
					className="absolute top-[34px] right-3.5 z-[1] cursor-pointer"
					onClick={() => setViewCredential(!viewCredential)}
				>
					{viewCredential ? <TbEyeOff className="icon-subHeader" /> : <TbEye className="icon-subHeader" />}
				</span>
			)}
		</div>
	);
}

export default HookFormInput;
