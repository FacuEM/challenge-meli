import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchFeatures } from '../redux/actions/features';
import { fetchBugs } from '../redux/actions/bugs';


const Tool = () => {
  const dispatch=useDispatch();
  const {id} = useParams();
  const tool = useSelector(state => state.tools.tool)
  const isLogged = useSelector(state => state.auth.logged)
  const features = useSelector(state => state.features.features)
  const bugs = useSelector(state => state.bugs.bugs)

  useEffect(() => {
    dispatch(fetchSingleTool(id))
    dispatch(fetchFeatures(id))
    dispatch(fetchBugs(id))
  },[])

  return (
    <div>
      {tool.title && <h1>{tool.title}</h1>}
      <h1>Features:</h1>
      {features && features.map((f) => <li>{f.title}</li>) }
      <Link to={`/addFeature/${id}`} ><button>Add new feature</button></Link>
      <h1>Bugs:</h1>
      {bugs && bugs.map((b) => <li>{b.title}</li>) }
      <Link to={`/addBug/${id}`} ><button>Add new bug</button></Link>
    </div>
  )
}

export default Tool