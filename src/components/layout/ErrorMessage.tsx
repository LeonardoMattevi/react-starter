interface ErrorMessageProps {
  msg: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className="bg-red-400 text-white border-red-700 border rounded-xl p-3 my-6">
      {props.msg}
    </div>
  );
}
