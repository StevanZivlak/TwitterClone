import React, { useEffect, useState } from "react"
import axios from "axios"
import Scream from "../components/scream/Scream"
import ScreamSkeleton from "../util/ScreamSkeleton"
import StaticProfile from "../components/profile/StaticProfile"
import ProfileSkeleton from "../util/ProfileSkeleton"
import { Grid } from "@material-ui/core"
import { getUserDetails } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

function User(props) {
    const params = useParams()
    const dispatch = useDispatch()
    const { screams, loading } = useSelector((state) => state.data)
    const [profile, setProfile] = useState(null)
    //const [screamIdParam, setScreamIdParam] = useState("")

    useEffect(() => {
        const handle = params.handle
        //const screamId = params.screamId
        //if (screamId) setScreamIdParam(screamId)

        dispatch(getUserDetails(handle))
        axios
            .get(`/user/${handle}`)
            .then((res) => {
                setProfile(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //TODO: changed 2  screamIdParam variables below to params.screamId. probs can delete screamIdParam state now...
    const screamsMarkup = loading ? (
        <ScreamSkeleton />
    ) : screams.length === 0 ? (
        <p>This user posted no screams yet.</p>
    ) : !params.screamId ? (
        screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
        screams.map((scream) => {
            if (scream.screamId !== params.screamId)
                return <Scream key={scream.screamId} scream={scream} />
            else {
                return <Scream key={scream.screamId} scream={scream} openDialog={true} />
            }
        })
    )

    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                {screamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                {profile !== null ? <StaticProfile profile={profile} /> : <ProfileSkeleton />}
            </Grid>
        </Grid>
    )
}

export default User
