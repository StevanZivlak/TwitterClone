// A theme has to have this to  satisfy the createMuiTheme() method.
const theme = {
    palette: {
        primary: {
            light: "#33c9dc",
            main: "#00bcd4",
            dark: "#008394",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff6333",
            main: "#ff3d00",
            dark: "#b22a00",
            contrastText: "#fff"
        }
    }
}

const customTheme = {
    ...theme,
    nonPalette: {
        form: {
            textAlign: "center"
        },
        image: {
            margin: "20px auto 20px auto"
        },
        pageTitle: {
            margin: "10px auto 10px auto"
        },
        textField: {
            margin: "auto auto 10px auto"
        },
        button: {
            marginTop: 20,
            position: "relative"
        },
        customError: {
            color: "red",
            fontSize: "0.8rem",
            marginTop: 10
        },
        progress: {
            position: "absolute"
        }
    },
    profileComponent: {
        paper: {
            padding: 20
        },
        profile: {
            "& .image-wrapper": {
                textAlign: "center",
                position: "relative",
                "& button": {
                    position: "absolute",
                    top: "80%",
                    left: "70%"
                }
            },
            "& .profile-image": {
                width: 200,
                height: 200,
                objectFit: "cover",
                maxWidth: "100%",
                borderRadius: "50%"
            },
            "& .profile-details": {
                textAlign: "center",
                "& span, svg": {
                    verticalAlign: "middle"
                },
                "& a": {
                    color: theme.palette.primary.main
                }
            },
            "& hr": {
                border: "none",
                margin: "0 0 10px 0"
            },
            "& svg.button": {
                "&:hover": {
                    cursor: "pointer"
                }
            }
        },
        buttons: {
            textAlign: "center",
            "& a": {
                margin: "20px 10px"
            }
        }
    },
    screamDeleteButton: {
        deleteButton: {
            position: "absolute",
            left: "91%",
            top: "5%"
        }
    },
    postScream: {
        closeButton: {
            position: "absolute",
            left: "91%",
            top: "4%"
        },
        submitButton: {
            position: "relative"
        },
        progressSpinner: {
            position: "absolute"
        }
    },
    screamDialog: {
        invisibleSeparator: {
            border: "none",
            margin: 4
        },
        visibleSeparator: {
            width: "100%",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            marginBottom: 20
        },
        profileImage: {
            width: 200,
            height: 200,
            objectFit: "cover",
            borderRadius: "50%"
        },
        dialogContentNoScroll: {
            overflow: "hidden"
        },
        dialogContent: {
            // padding: 20
        },
        closeButton: {
            position: "absolute",
            left: "91%",
            top: "2%"
        },
        centeredProgressCircle: {
            textAlign: "center",
            marginTop: 50,
            marginBottom: 50
        },
        dialog: {
            position: "relative",
            overflowY: "hidden", // hide vertical
            overflowX: "hidden" // hide horizontal
        },
        wrappedText: {
            wordWrap: "break-word"
        },
        expandButton: {
            position: "absolute",
            left: "90%"
        }
    },
    screamDialogComments: {
        commentImage: {
            maxWidth: "100%",
            height: 100,
            objectFit: "cover",
            borderRadius: "50%"
        },
        commentData: {
            marginLeft: 10
        },
        commentBody: {
            //paddingTop: 5,
            //paddingBottom: 5
        }
    },
    screamSkeleton: {
        card: {
            display: "flex",
            marginBottom: 20
        },
        cardMedia: {
            minWidth: 200,
            objectFit: "cover"
        },
        cardContent: {
            width: "100%",
            flexDirection: "column",
            padding: 25
        },
        handle: {
            width: 60,
            height: 18,
            backgroundColor: theme.palette.primary.main,
            marginBottom: 7
        },
        date: {
            height: 14,
            width: 100,
            backgroundColor: "rgba(0,0,0, 0.3)",
            marginBottom: 10
        },
        fullLine: {
            height: 15,
            width: "90%",
            backgroundColor: "rgba(0,0,0, 0.6)",
            marginBottom: 10
        },
        halfLine: {
            height: 15,
            width: "50%",
            backgroundColor: "rgba(0,0,0, 0.6)",
            marginBottom: 10
        }
    },
    profileSkeleton: {
        handle: {
            height: 20,
            backgroundColor: theme.palette.primary.main,
            width: 60,
            margin: "0 auto 7px auto"
        },
        fullLine: {
            height: 15,
            width: "100%",
            backgroundColor: "rgba(0,0,0, 0.6)",
            marginBottom: 10
        }
    }
}

export default customTheme
