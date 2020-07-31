import { UserAccessOneService } from "../../../services/user-access-one/user-access-one.service"

interface Usersec {
  userid: string
  mainmenu: string
  menuname: string
}

export function X() {
  async (): Promise<Array<Usersec> | string> => {
    try {
      const userAccessOneService = new UserAccessOneService()
      let currentUser = userAccessOneService.getCurrentUser();
      const response = await userAccessOneService.GetOneUserAccess(currentUser);
      const { data } = await response.json();
      console.log("this is util : one userData : " + data);
      return data;
    } catch (error) {
      if (error) {
        return error.message;
      }
    }
  }
}






// async (): Promise<Array<Usersec> | string> => {

// 	try {
// 		const userAccessOneService = new UserAccessOneService()
// 		let currentUser = userAccessOneService.getCurrentUser();
// 		const response = await userAccessOneService.GetOneUserAccess(currentUser);
//     const { data } = await response.json();
//     console.log("this is one userData : "+data);
// 		return data;
// 	} catch (error) {
// 		if (error) {
// 			return error.message;
// 		}
// 	}
// }
