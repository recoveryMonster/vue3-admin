import { defineComponent } from 'vue'
import { Avatar } from '@element-plus/icons'
import style from './index.module.scss'

export default defineComponent({
  name: 'Login',
  render() {
    return (
      <div className={style.loginContainer}>
        <el-form className={style.loginForm}>
          <div className={style.titleContainer}>
            <h3 className={style.title}>用户登陆</h3>
          </div>
          <el-form-item prop="username">
            <span className={style.svgContainer}>
              <el-icon>
                <Avatar />
              </el-icon>
            </span>
            <el-input placeholder="username" name="username" type="text" />
          </el-form-item>
          <el-form-item prop="password">
            <span className={style.svgContainer}>
              <el-icon>
                <Avatar />
              </el-icon>
            </span>
            <el-input placeholder="password" name="password" />
            <span className={style.showPwd}>
              <el-icon>
                <Avatar />
              </el-icon>
            </span>
          </el-form-item>
          <el-button type="primary" style="width: 100%; margin-bottom: 30px">
            {' '}
          </el-button>
        </el-form>
      </div>
    )
  },
})
