import { Router } from 'express';
import tokenController from './controllers/tokenController';
const routes = Router();

const runAction = (action, req, res) =>  {
    action(req, res)
      .then(data => {
        res.status(200).send(data);
        return;
      })
      .catch(err => {
        res
          .status(err.status || 400)
          .send({
            err: err.name ? err.name : "Error",
            message: err.message
          });
        return;
      });
};


// SECTION

routes.put('/api/section', (req, res) => runAction(tokenController.mofidySection, req, res));
routes.get('/api/section/list', (req, res) => runAction(tokenController.getSections, req, res));
routes.get('/api/section/:id', (req, res) => runAction(tokenController.getSection, req, res));
routes.post('/api/section', (req, res) => runAction(tokenController.createSection, req, res));
routes.delete('/api/section/:id', (req, res) => runAction(tokenController.deleteSection, req, res));

// SHARE

routes.get('/api/share/list/:id', (req, res) => runAction(tokenController.getShareBySectionId, req, res));
routes.post('/api/share', (req, res) => runAction(tokenController.shareSection, req, res));
routes.delete('/api/share/:id', (req, res) => runAction(tokenController.deleteShare, req, res));

// CONTENT

routes.put('/api/content', (req, res) => runAction(tokenController.modifyContent, req, res));
routes.get('/api/content/list/:id', (req, res) => runAction(tokenController.getContentList, req, res));
routes.get('/api/content/:id', (req, res) => runAction(tokenController.getContent, req, res));
routes.post('/api/content', (req, res) => runAction(tokenController.createContent, req, res));
routes.delete('/api/content/:id', (req, res) => runAction(tokenController.deleteContent, req, res));

// FILE

routes.get('/api/file/:id', (req, res) => runAction(tokenController.getFile, req, res));
routes.get('/api/file/list/:id', (req, res) => runAction(tokenController.getFiles, req, res));
routes.post('/api/file', (req, res) => runAction(tokenController.createFile, req, res));
routes.delete('/api/file/:id', (req, res) => runAction(tokenController.deleteFile, req, res));


export default routes;
