"use client";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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

const AddReferenceForm = () => {
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
          Name
        </label>
        <input
          type="text"
          id="name"
          className="inputField"
          {...register("name")}
          placeholder="Name"
        />
        <ErrorMessage
          errors={errors}
          name={"name"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="mobile" className="inputLabel required">
          Mobile
        </label>
        <input
          type="text"
          id="mobile"
          className="inputField"
          {...register("mobile", { valueAsNumber: true })}
          placeholder="Mobile"
        />
        <ErrorMessage
          errors={errors}
          name={"mobile"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="address" className="inputLabel">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="inputField"
          {...register("address")}
          placeholder="Address"
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="area" className="inputLabel">
          Area
        </label>
        <input
          type="text"
          id="area"
          className="inputField"
          {...register("area")}
          placeholder="Area"
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

export default AddReferenceForm;
