import { useSnackbar } from "notistack";

export const useDisplayer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const displaySuccess = (message: string) =>
    enqueueSnackbar(message, { variant: "success" });

  const displayError = (message: string) =>
    enqueueSnackbar(message, { variant: "error" });

  return { displaySuccess, displayError };
};
