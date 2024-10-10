import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from 'src/controllers/video.controller';
import { VideoService } from 'src/services/video.service';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';

describe('VideoController', () => {
  let videoController: VideoController;
  let videoService: VideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [
        {
          provide: VideoService,
          useValue: {
            listVideos: jest.fn(),
            getVideo: jest.fn(),
            findVideoByTitle: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    videoController = module.get<VideoController>(VideoController);
    videoService = module.get<VideoService>(VideoService);
  });

  describe('listVideos', () => {
    it('should return a list of videos', async () => {
      const result = { videos: [] };
      jest.spyOn(videoService, 'listVideos').mockResolvedValue(result);

      expect(await videoController.listVideos(1)).toBe(result);
    });
  });

  describe('getVideoById', () => {
    it('should return a video by id', async () => {
      const result = { id: '1', title: 'Test Video' };
      jest.spyOn(videoService, 'getVideo').mockResolvedValue(result);

      expect(await videoController.getVideoById('1')).toBe(result);
    });
  });

  describe('searchVideos', () => {
    it('should return a list of videos matching the search query', async () => {
      const result = { videos: [] };
      jest.spyOn(videoService, 'findVideoByTitle').mockResolvedValue(result);

      expect(await videoController.searchVideos('test')).toBe(result);
    });
  });
});
