"use server";

export const fileUploadAction = async (
  t = { message: "" },
  formData: FormData
) => {
  const response = await fetch(
    "https://esxj9wky33.execute-api.eu-north-1.amazonaws.com/preprocess-data",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();

  return { message: "File Uploaded", data };
};
