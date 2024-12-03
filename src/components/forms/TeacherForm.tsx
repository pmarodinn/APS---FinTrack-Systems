"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Nome de usuário deve ter no mínimo 3 caracteres!" })
    .max(20, { message: "Nome de usuário deve ter no máximo menos 3 caracteres!" }),
  email: z.string().email({ message: "Email inválido!" }),
  password: z
    .string()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres!" }),
  firstName: z.string().min(1, { message: "Obrigatório!" }),
  lastName: z.string().min(1, { message: "Obrigatório!" }),
  phone: z.string().min(1, { message: "Obrigatório!" }),
  address: z.string().min(1, { message: "Obrigatório!" }),
  bloodType: z.string().min(1, { message: "Obrigatório!" }),
  birthday: z.date({ message: "Obrigatório!" }),
  sex: z.enum(["male", "female"], { message: "Obrigatório!" }),
  img: z.instanceof(File, { message: "Obrigatório!" }),
});
type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Novo Professor/Disciplina</h1>
      <span className="text-xs text-gray-400 font-medium">
        Informações para autenticação
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Usuário"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Senha"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Informações Pessoais
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Primeiro Nome"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Sobrenome"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Telefone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Endereço"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputField
          label="Data de Nascimento"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Genêro</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Adicione uma foto</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Criar" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
