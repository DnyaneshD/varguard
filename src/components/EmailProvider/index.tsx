import React from "react";

export const EmailContext = React.createContext<string | null>(null);
export const SetEmailContext = React.createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);

function EmailProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = React.useState("");

  return (
    <EmailContext.Provider value={email}>
      <SetEmailContext.Provider value={setEmail}>
        {children}
      </SetEmailContext.Provider>
    </EmailContext.Provider>
  );
}

export default EmailProvider;
