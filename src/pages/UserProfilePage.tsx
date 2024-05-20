import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import Loading from "@/components/Loading"
import NoResults from "@/components/NoResults"

function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser()
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser()


  if(isGetLoading){
    return <Loading/>
  }

  if(!currentUser){
    return <NoResults Text="Unable to load user profile"/>
  }

  return( 
    <UserProfileForm 
      currentUser = {currentUser} 
      onSave={updateUser} 
      isLoading={isUpdateLoading} 
    />
  )
  
}

export default UserProfilePage