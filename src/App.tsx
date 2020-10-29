import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import ipadHorisontal from './images/ipad-mini-horizontal.png'
import ipadVertical from './images/ipad-mini-vertifical.png'
import iphoneHorizontal from './images/iphone5-horizontal.png'
import iphoneVertical from './images/iphone5-vertical.png'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {restoreState, saveState} from "./LocalStorageForComponent";
import {Clock} from "./Components/Clock";


function App() {
    const [iconsList, setIconList] = useState([
        {id: '1', name: '1', thumb: 'Weather.png'},
        {id: '2', name: '2', thumb: 'Videos.png'},
        {id: '3', name: '3', thumb: 'Users.png'},
        {id: '4', name: '4', thumb: 'Twitter.png'},
        {id: '5', name: '5', thumb: 'TrashManaged.png'},
        {id: "6", name: "6", thumb: 'TrashFull.png'},
        {id: "7", name: "7", thumb: 'TrashEmpty.png'},
        {id: "8", name: "8", thumb: 'TimeMachineDisk.png'},
        {id: "9", name: "9", thumb: 'TimeMachine.png'},
        {id: "10", name: "10", thumb: 'System.png'},
        {id: "11", name: "11", thumb: 'Stocks.png'},
        {id: "12", name: "12", thumb: 'Smart.png'},
        {id: "13", name: "13", thumb: 'Settings.png'},
        {id: "14", name: "14", thumb: 'Safari.png'},
        {id: "15", name: "15", thumb: 'RSSNotifier.png'},
        {id: "16", name: "16", thumb: 'Reminders.png'},
        {id: "17", name: "17", thumb: 'Preview.png'},
        {id: "18", name: "18", thumb: 'Photoshop.png'},
        {id: "19", name: "19", thumb: 'Photos.png'},
        {id: "20", name: "20", thumb: 'Phone.png'},
        {id: "21", name: "21", thumb: 'Passbook.png'},
        {id: "22", name: "22", thumb: 'Notes.png'},
        {id: "23", name: "23", thumb: 'Newsstand.png'},
        {id: "24", name: "24", thumb: 'Music.png'},
        {id: "25", name: "25", thumb: 'Monosnap.png'},
        {id: "26", name: "26", thumb: 'MiscDesigns01.png'},
        {id: "27", name: "27", thumb: 'Messages.png'},
        {id: "28", name: "28", thumb: 'Maps.png'},
        {id: "29", name: "29", thumb: 'Mail.png'},
        {id: "30", name: "30", thumb: 'Library.png'},
        {id: "31", name: "31", thumb: 'LaCieRugged2.png'},
        {id: "32", name: "32", thumb: 'LaCieRugged.png'},
        {id: "33", name: "33", thumb: 'LaCieNeilPoulton.png'},
        {id: "34", name: "34", thumb: 'LaCieFAPorsche2.png'},
        {id: "35", name: "35", thumb: 'LaCieFAPorsche.png'},
        {id: "36", name: "36", thumb: 'iTunesStore.png'},
        {id: "37", name: "37", thumb: 'Internal.png'},
        {id: "38", name: "38", thumb: 'InDesign.png'},
        {id: "39", name: "39", thumb: 'Illustrator.png'},
        {id: "40", name: "40", thumb: 'IdeaStuff2.png'},
        {id: "41", name: "41", thumb: 'IdeaStuff.png'},
        {id: "42", name: "42", thumb: 'Gemini.png'},
        {id: "43", name: "43", thumb: 'GameCenteralt4.png'},
        {id: "44", name: "44", thumb: 'GameCenteralt3.png'},
        {id: "45", name: "45", thumb: 'GameCentealt2.png'},
        {id: "46", name: "46", thumb: 'FontExplorerX.png'},
        {id: "47", name: "47", thumb: 'Finder.png'},
        {id: "48", name: "48", thumb: 'FaceTime.png'},
        {id: "49", name: "49", thumb: 'EasyFind.png'},
        {id: "50", name: "50", thumb: 'DropStuff.png'},
        {id: "51", name: "51", thumb: 'Downloads.png'},
        {id: "52", name: "52", thumb: 'Doo.png'},
        {id: "53", name: "53", thumb: 'Dictionary.png'},
        {id: "54", name: "54", thumb: 'Developer.png'},
        {id: "55", name: "55", thumb: 'DesignBriefs.png'},
        {id: "56", name: "56", thumb: 'Contacts.png'},
        {id: "57", name: "57", thumb: 'Compass.png'},
        {id: "58", name: "58", thumb: 'Cobook.png'},
        {id: "59", name: "59", thumb: 'CloudApp.png'},
        {id: "60", name: "60", thumb: 'Clock.png'},
        {id: "61", name: "61", thumb: 'CandyBar.png'},
        {id: "62", name: "62", thumb: 'Camera.png'},
        {id: "63", name: "63", thumb: 'CalendarOfficial.png'},
        {id: "64", name: "64", thumb: 'CalendarBlank.png'},
        {id: "65", name: "65", thumb: 'Calendar.png'},
        {id: "66", name: "66", thumb: 'Calculator.png'},
        {id: "67", name: "67", thumb: 'Burnable.png'},
        {id: "68", name: "68", thumb: 'Applicons.png'},
        {id: "69", name: "69", thumb: 'AppStore.png'},
    ])
    useEffect(() => {
    restoreState1()
    }, [])
    // const [currentAp, setCurrentAp] = useState(null)
    const items = Array.from(iconsList)

    const handleOnDragEnd = (result) => {
        if (!result.destination) return
        // const items = Array.from(iconsList)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setIconList(items)
        saveState1()
    }

    ///////////*********LOCAL STARAGE***********/////////////
    const saveState1 = () => {
        saveState('appList', items)
    }

    function restoreState1() {

        let stateFromLocalStorage1 = restoreState("appList", items);
        setIconList(stateFromLocalStorage1)
    }

    // function dragStartHandler(e, el) {
    //     console.log('drag', el)
    //     setCurrentAp(el)
    // }
    //
    // function dragEndHandler(e) {
    //     // e.target.style.background = 'none'
    // }
    //
    // function dragOverHandler(e) {
    //     e.preventDefault()
    //     // e.target.style.background = 'lightgray'
    // }
    //
    // function dropHandler(e, el) {
    //     e.preventDefault()
    //     setIconList(iconsList.map(c => {
    //         if (c.id === el.id) {
    //             return {...c, order: currentAp.order}
    //         }
    //         if (c.id === currentAp.id) {
    //             return {...c, order: el.order}
    //         }
    //         return e
    //     }))
    //     e.target.style.opacity = "50%"
    // }
    //
    // const sortApp = (a, b) => {
    //     if (a.order > b.order) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // }

    return (


        <div className={styles.App}>
            <Clock/>
            <div className={styles.deviceWrapper}>
                <img src={ipadHorisontal} className={styles.ipadHorisontal}/>
                <img src={ipadVertical} className={styles.ipadVertical}/>
                <img src={iphoneHorizontal} className={styles.iphoneHorizontal}/>
                <img src={iphoneVertical} className={styles.iphoneVertical}/>
                <div className={`${styles.screenWrapper}`}>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId='screen'>
                            {(provided) => (
                                <div className={styles.screen}
                                     {...provided.droppableProps} ref={provided.innerRef}>
                                    {iconsList.map((el, index) =>
                                        <Draggable key={el.id} draggableId={el.id} index={index}>
                                            {(provided) => (
                                                <div {...provided.draggableProps}
                                                     {...provided.dragHandleProps}
                                                     ref={provided.innerRef}
                                                     className={styles.iconsNew}
                                                >
                                                    <img className={styles.Applicons} alt={el.name}
                                                         src={require(`./images/icons/${el.thumb}`)}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    )}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    {/*<div className={styles.screen}></div>*/}
                </div>


            </div>

        </div>

    );
}

export default App;


// <img
//     onDragStart={(e)=>dragStartHandler(e,el)}
//     onDragLeave={(e)=>dragEndHandler(e)}
//     onDragEnd={(e)=>dragEndHandler(e)}
//     onDragOver={(e)=>dragOverHandler(e)}
//     onDrop={(e)=>dropHandler(e,el)}
//     draggable={true}
//     className={styles.iconsNew}
//     src={require(`./images/icons/${el.name}`)}
// />

{/*<div*/
}
{/*    key={el.id}*/
}
{/*    onDragStart={(e)=>dragStartHandler(e,el)}*/
}
{/*    onDragLeave={(e)=>dragEndHandler(e)}*/
}
{/*    onDragEnd={(e)=>dragEndHandler(e)}*/
}
{/*    onDragOver={(e)=>dragOverHandler(e)}*/
}
{/*    onDrop={(e)=>dropHandler(e,el)}*/
}
{/*    draggable={true}*/
}
{/*    className={styles.iconsNew}*/
}
{/*>*/
}
{/*    <img alt={el.name} src={require(`./images/icons/${el.name}`)}/>*/
}


{/*</div>*/
}
{/*<img src={require("./images/icons/Applicons.png")} className={styles.Applicons}/>*/
}
{/*<img src={require("./images/icons/AppStore.png")} className={styles.AppStore}/>*/
}
{/*<img src={require("./images/icons/Burnable.png")} className={styles.Burnable}/>*/
}
{/*<img src={require("./images/icons/Calculator.png")} className={styles.Calculator}/>*/
}
{/*<img src={require("./images/icons/Camera.png")} className={styles.Camera}/>*/
}
{/*<img src={require("./images/icons/Clock.png")} className={styles.Clock}/>*/
}
{/*<img src={require("./images/icons/CloudApp.png")} className={styles.CloudApp}/>*/
}


{/*)*/
}
{/*}*/
}

