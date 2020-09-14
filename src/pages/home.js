import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"

import { useSelector, useDispatch } from "react-redux"
import { getScreams } from "../redux/actions/dataActions"

import Scream from "../components/scream/Scream"
import Profile from "../components/profile/Profile"
import ScreamSkeleton from "../util/ScreamSkeleton"

function Home() {
    const dispatch = useDispatch()
    const { screams, loading } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getScreams())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const recentScreamsMarkup = !loading ? (
        screams.map((scream) => {
            return <Scream key={scream.screamId} scream={scream} />
        })
    ) : (
        <ScreamSkeleton />
    )

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
