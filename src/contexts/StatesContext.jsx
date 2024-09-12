import { createContext, useContext, useState } from "react";

const TriggerContext = createContext()
function TriggerProvider({children}) {
    const [isOpen,setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <TriggerContext.Provider value={{
            isOpen,
             setIsOpen,
             isDark,
             setIsDark,
             setIsOpenModal,
             isOpenModal
        }}>
            {children}
            
        </TriggerContext.Provider>
    )
}
 function useTrigger(){
    const context = useContext(TriggerContext)
    if(context === undefined) throw new Error('context was called outside of provider')
    return context;
}

export  {useTrigger, TriggerProvider, TriggerContext }
