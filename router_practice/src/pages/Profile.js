import { useParams } from "react-router-dom";

const data = {
   velopert: {
     name: '김민준',
     description: '리액트 연습 중인 백수',
   },
  gildong: {
    name: '고길동',
    description: '뒤틀린 황천의 소드마스터',
  },
}

const Profile = () => {
  const params = useParams()
  const profile = data[params.username]

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  )
}

export default Profile
