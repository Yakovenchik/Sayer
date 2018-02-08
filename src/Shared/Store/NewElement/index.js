import { observable, action} from 'mobx';


export default class ElementStore {
    @observable elementList = JSON.parse(localStorage.getItem('elementList'));
    @observable element = {
        comments: []
    }

    @action addElement(elem) {
         this.elementList.push(elem);
         localStorage['elementList'] = JSON.stringify(this.elementList);
    }
    @action addComment(id, comment){
        this.elementList.map((item, i)=>{
                return (
                    id === i ? item.comments.push(comment) && item.NumberOfComments++: null
                )
            }
        )
        localStorage['elementList']=JSON.stringify(this.elementList);
    }
    @action removeElement(i) {
        this.elementList.splice(i, 1);
        localStorage['elementList']= JSON.stringify(this.elementList);
    }
}