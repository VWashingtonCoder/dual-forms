import { MovieFormType, MusicFormType, FormElementType } from "../../GlobalTypes";

type ConfirmPropsType = {
    formKey: string;
    formValues: MovieFormType | MusicFormType;
    labels: FormElementType[];
}

export default function Confirmation(props: ConfirmPropsType) {
    const { formKey, formValues, labels } = props;
    const form = formKey === "movies" ? "Movies" : "Music";

    return (
        <div className={`confirm ${formKey}`}>
            <h2 className="confirm-title">
                Thank You!<br />
                Your responses have been recorded.
            </h2>
            <ul className={`form-responses ${formKey}`}>
                {labels.map(item => (
                    <li key={item.key} className={`label ${item.key}`}>
                        Fav {form} {item.label}: { 
                            formValues[item.name] 
                                ? formValues[item.name] 
                                : "N/A" 
                        } 
                    </li>
                ))}
            </ul>
        </div>
    )
}