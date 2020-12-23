import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchFeatures } from '../redux/actions/features';
import {priorityAvg} from '../aux/index';
import {completeFeature, activeFeature} from '../redux/actions/features'
// Material UI
import {TableBody, TableCell, TableRow,  Button} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// Styles
import {ToolStyles} from '../assets/ToolStyles';


const FeatureCell = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const classes = ToolStyles();
  // Store
  const tool = useSelector(state => state.tools.tool)
  const isLogged = useSelector(state => state.auth.logged)
  const features = useSelector(state => state.features.features)

  useEffect(() => {
    dispatch(fetchSingleTool(id))
    dispatch(fetchFeatures(id))
  },[])

  return ( <TableBody>
          {features && features.map((f) => (
            <TableRow key={f.id}>
              
              <TableCell align="left" >{f.title}</TableCell>

              <TableCell align="left">

                {f.Priorities ? priorityAvg(f.Priorities) : 'Low' }

              </TableCell>
              <TableCell align="left">

                {f.User && f.User.name}

              </TableCell>
              <TableCell align="left">

                {f.completed ? 'Completed' :  f.active ? 'Active' : 'Pending'}
                {(f.User && isLogged.name === f.User.name) ? !f.completed ? 
                  <Button  color="secondary" onClick={() => dispatch(completeFeature(f.id, f.ToolId))}>Done</Button>
                  : null : null}

              </TableCell>
              <TableCell align="left">
                <Link to={`/feature/${f.id}`} className={classes.linkDeco}> More Details </Link>
              </TableCell>

             {tool.UserId === isLogged.id ? (!f.active && !f.completed) ? <TableCell align="left">
               <Button variant="outlined" color="primary" disabled={features.filter(f => f.active).length > 0}
               onClick={() => dispatch(activeFeature(f.id, f.ToolId))}>
                 Start Now</Button></TableCell> : <p>Active right now or completed  </p> : null} 

              </TableRow>
          ))}
             </TableBody>
  )
}

export default FeatureCell
