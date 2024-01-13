"use client";

// Import Dependencies
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  mobile: Yup.number()
    .typeError("Mobile must be a number")
    .required()
    .label("Mobile"),
  address: Yup.string().label("Address"),
  area: Yup.string().label("Area"),
});

const EditCategoryForm = ({ setOpenModal }) => {
  const referenceInfo = {
    name: "AC Pump",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: referenceInfo,
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="inputGroup">
        <label htmlFor="name" className="inputLabel required">
          Category Name
        </label>
        <input
          type="text"
          id="name"
          className="inputField"
          {...register("name")}
          placeholder="Category Name"
        />
        <ErrorMessage
          errors={errors}
          name={"name"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="flex items-center gap-2 justify-end">
        <div onClick={() => setOpenModal(false)} className="inputBtn cancel">
          Cancel
        </div>
        <button type="submit" className="inputBtn">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditCategoryForm;
