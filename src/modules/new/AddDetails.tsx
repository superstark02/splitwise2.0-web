import React from "react"
import { BottomSheet } from "../../components/bottom-sheet/BottomSheet.tsx"


// add photo
// description
// add amount
// add icon

export const AddDetails = (props: { setOpenBs: Function, openBs: boolean }) => {
    return <BottomSheet setOpen={props.setOpenBs} open={props.openBs}>
        <div>

        </div>
    </BottomSheet>
}