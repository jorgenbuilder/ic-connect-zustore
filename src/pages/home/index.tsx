import React from 'react'
import Styles from './styles.module.css'
import useThemeStore from 'stores/theme'
import { useConnect } from 'stores/connect'
import Button from 'ui/button'

interface Props {};

export default function HomePage (props : Props) {
    const { theme } = useThemeStore();
    const connect = useConnect();

    return <div className={Styles.root}>
        <h1>Connect</h1>
        {
            connect.connected
            ? <>
                <div>Principal: {connect.principal?.toText()}</div>
                <Button onClick={() => connect.disconnect()}>Disconnect</Button>
            </>
            : <>
                <Button disabled={connect.connecting} onClick={() => connect.plugConnect()}>Connect Plug</Button>
                <Button disabled={connect.connecting} onClick={() => connect.stoicConnect()}>Connect Stoic</Button>
                <Button disabled={connect.connecting} onClick={() => connect.iiConnect()}>Connect Internet Identity</Button>
                <Button disabled={connect.connecting} onClick={() => connect.nfidConnect()}>Connect NFID</Button>
            </>
        }
    </div>
};