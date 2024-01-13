"use client";

// Import Dependencies
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
});

const AddCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(handleOnSubmit)}
      className="inputForm"
    >
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

      <div className="text-right">
        <button type="submit" className="inputBtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
