import { SelectItem } from "@radix-ui/react-select"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const types = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea"
}

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
    function renderInputByComponentType(controlItem) {
        let element = null;
        const value = formData[controlItem.name] || '';

        switch (controlItem.componentType) {
            case types.INPUT:
                element = (
                    <Input
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
                break;
            case types.SELECT:
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [controlItem.name]: value
                    })} value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {controlItem.options && controlItem.options.length > 0 ?
                                controlItem.options.map((option) => (
                                    <SelectItem key={option.id} value={option.id}>
                                        {option.label}
                                    </SelectItem>
                                )) : null}
                        </SelectContent>
                    </Select>
                );
                break;
            case types.TEXTAREA:
                element = (
                    <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.id}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
                break;

            default:
                element = (
                    <Input
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
                break;
        }

        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {formControls.map((item) => (
                    <div className="grid w-full gap-2" key={item.name}>
                        <Label className="mb-1">{item.label}</Label>
                        {renderInputByComponentType(item)}
                    </div>
                ))}
            </div>
            <Button type="submit" className="mt-2 w-full">
                {buttonText || "Submit"}
            </Button>
        </form>
    );
}

export default CommonForm;