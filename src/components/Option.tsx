import { FormControlLabel, Radio } from "@mui/material"
import styles from '@/styles/Home.module.css'
import Image from "next/image";
import { OptionProps } from "@/interfaces";



export const Option = ({ name, value, image }: OptionProps) => {

    return (
        <div className={styles.logo}>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                priority
            />
            <FormControlLabel value={value} control={<Radio />} label={name} />
        </div>
    )
}
