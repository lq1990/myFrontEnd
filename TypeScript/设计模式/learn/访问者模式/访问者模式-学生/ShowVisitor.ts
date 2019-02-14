import { IVisitor } from './IVisitor';
import { College } from './College';
import { Bachelor } from './Bachelor';
import { AStudent } from './AStudent';

/**
 * clog 访问的是何种学生。
 */
export class ShowVisitor implements IVisitor {
  // 重载时，先定义
  visit(bachelor: Bachelor);
  visit(college: College);

  // 再实现
  visit(v: Bachelor | College) {
    if (v instanceof Bachelor) {
      console.log('visit A Bachelor Student');
    } else {
      console.log('visit A College Student');
    }
  }

  printMsg(s: AStudent) {
    console.log(
      'Name: ' +
        s.getName() +
        '\n' +
        'Uni: ' +
        s.getUni() +
        '\n' +
        'Rating: ' +
        s.getRating() +
        "\n"
    );
  }
}
