import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { useConnect } from 'stores/connect';

import HomePage from 'pages/home';

import Messages from 'ui/messages';
import ScrollToTop from 'ui/scroll-to-top';
import Modal from 'ui/modal';
import useMessageStore from 'stores/messages';

function App() {
    const { initConnect } = useConnect();
    const { initMessage } = useMessageStore();
    React.useEffect(() => {
        initConnect()
        initMessage()
    }, []);
    return <>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
        <Messages />
        <ScrollToTop />
        <Modal />
    </>
}

export default App
