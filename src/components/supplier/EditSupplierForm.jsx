"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  manager: Yup.string().required().label("Manager"),
  mobile: Yup.number()
    .typeError("Mobile must be a number")
    .required()
    .label("Mobile"),
  mobileTwo: Yup.number().typeError("Mobile must be a number").label("Mobile"),
  mobileThree: Yup.number()
    .typeError("Mobile must be a number")
    .label("Mobile"),

  address: Yup.string().required().label("Address"),
  prefix: Yup.string().required().label("Prefix"),
});

const EditSupplierForm = ({ setOpenModal }) => {
  const referenceInfo = {
    name: "Mehedi Hasan ",
    manager: "Rahat",
    mobile: "01726476303",
    mobileTwo: "01743068304",
    mobileThree: "01726476303",
    address: "Trishal, Mymensingh",
    prefix: "Showroom",
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

      <div className="grid grid-cols-2 gap-3">
        <div className="inputGroup">
          <label htmlFor="manager" className="inputLabel required">
            Manager
          </label>
          <input
            type="text"
            id="manager"
            className="inputField"
            {...register("manager")}
            placeholder="Manager"
          />
          <ErrorMessage
            errors={errors}
            name={"manager"}
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
          <label htmlFor="mobileTwo" className="inputLabel">
            Mobile Two
          </label>
          <input
            type="text"
            id="mobileTwo"
            className="inputField"
            {...register("mobileTwo", { valueAsNumber: true })}
            placeholder="Mobile"
          />
          <ErrorMessage
            errors={errors}
            name={"mobileTwo"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="mobileThree" className="inputLabel ">
            Mobile Three
          </label>
          <input
            type="text"
            id="mobileThree"
            className="inputField"
            {...register("mobileThree", { valueAsNumber: true })}
            placeholder="Mobile"
          />
          <ErrorMessage
            errors={errors}
            name={"mobileThree"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div className="inputGroup">
        <label htmlFor="address" className="inputLabel required">
          Address
        </label>
        <textarea
          type="text"
          id="address"
          className="inputField"
          {...register("address")}
          placeholder="Address"
        ></textarea>
      </div>

      <div className="inputGroup">
        <label htmlFor="prefix" className="inputLabel required">
          Prefix
        </label>
        <input
          type="text"
          id="prefix"
          className="inputField"
          {...register("prefix")}
          placeholder="Area"
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

export default EditSupplierForm;
